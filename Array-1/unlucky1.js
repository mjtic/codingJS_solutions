function unlucky1(nums){
  return nums.some((num,i)=>nums[0]===1&&nums[1]===3||nums[1]===1&&nums[2]===3||nums[nums.length-2]===1&&nums[nums.length-1]===3 )
}