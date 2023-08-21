function countClumps(nums){
  
  let count = 0;
  for(let i=0; i<nums.length; i++){
    if(nums[i] === nums[i+1]){
      count++;
      
      for(let j=i+1; j<nums.length; j++){
        if(nums[j]!==nums[i]){
          break;
        }
        i++;
      }
    }  
  }
  return count;
}