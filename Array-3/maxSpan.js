function maxSpan (nums){
  if(nums.length > 0){
    let maxSpan = 1;
    
    for(let i=0; i<nums.length; i++){
      for(let j=nums.length-1; j>i; j--){
        if(nums[j]===nums[i]){
          let count = j-i+1;
          if(count>maxSpan){
            maxSpan = count;
          }
          break;
        }
      }
    }
    return maxSpan;
  }
  return 0;
}
