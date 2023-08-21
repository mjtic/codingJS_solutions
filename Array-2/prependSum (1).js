function prependSum(nums){

  const[num1,num2,...rest] = nums;
  const sum = num1+num2;
  
  return [sum,...rest];
}

/*
function prependSum(nums){
  let sum = nums[0]+nums[1];
  nums.splice(0,2,sum);
  return nums
}
*/

/*
function prependSum(nums){
  let sum = nums[0] + nums[1];
  return [sum,nums.slice(2)].flat(1);
}
*/
