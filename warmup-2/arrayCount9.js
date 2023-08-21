function arrayCount9(nums){
  // return #9's in the array
  const count = nums.filter(num=>num===9).length;
  return count;
}

/*
  let count =0;
    for(let i=0; i<nums.length; i++){
      if(nums[i]===9){
        count++
      }
    }
  return count;
*/
