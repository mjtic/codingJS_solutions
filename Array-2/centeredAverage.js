function centeredAverage(nums){
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  
  let sum = nums.reduce((sum,num)=>sum+num,0);
  
  sum-= (max+min);
  
  let average = sum/(nums.length-2)
  
  return average
}