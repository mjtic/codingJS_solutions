function countEvens(nums){
  return nums.filter((num,i)=>nums[i]%2===0).length;
}