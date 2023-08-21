function fix45(nums){
  for(let i=0; i<nums.length; i++){
    if(nums[i]===5 && i===0 || nums[i]===5 && nums[i-1]!==4){
      for(let j=0; j<nums.length; j++){
        if(nums[j]===4 && nums[j+1]!==5){
          const five = nums[j+1];
          nums[j+1] = 5;
          nums[i] = five;
          break;
        }
      }
    }
  }
  return nums;
}