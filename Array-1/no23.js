function no23(nums){
  return Array(nums).some((num,i)=>!(num[i]===2||nums[i]===3 ||(num[i+1]===2||nums[i+1]===3))
}