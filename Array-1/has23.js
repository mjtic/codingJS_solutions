function has23(nums){
  return Array(nums).some((num,i)=> (nums[i]===2 ||nums[i]===3)||(nums[i+1]===2 ||nums[i+1]===3))
}