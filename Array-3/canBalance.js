function canBalance(nums) {
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = 0; j < i; j++) {
      sum += nums[j];
    }

    for (let j = i; j < nums.length; j++) {
      sum -= nums[j];
    }

    if (sum === 0) {
      return true;
    }
  }

  return false;
}

// using reduce()

function canBalance(nums){
  let tSum = nums.reduce((sum,num)=>sum+num,0);
  let leftSum =0;
  
  for(let i=0; i<nums.length; i++){
    leftSum += nums[i];
   if(leftSum===tSum-leftSum){
     return true;
   }
  }
  return false;
}