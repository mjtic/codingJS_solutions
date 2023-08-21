function sum2(nums){
  let sum= nums[0]+nums[1];
  
  if(nums.length >=2){
    return sum;
  }else if(nums.length === 1){
    return nums[0];
  }else{
    return 0;
  }
}

//better

function sum2(nums){
  return nums.slice(0,2).reduce((sum,num)=>sum+num,0);
}