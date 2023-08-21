function modThree(nums){
  let count = 1;
  
  for(let i=0; i<nums.length; i++){
    if(nums[i]%2===nums[i-1]%2){
      count++;
      if(count===3){
      return true;
    }
    }else{
      count = 1;
    }
  }
  return false;
}