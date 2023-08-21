function has271(nums){
 for(let i=0; i<nums.length; i++){
   if(nums[i]===2&&nums[i+1]===7&&nums[i+2]===1){
     return true;
   }
 }
  return false;
}

/*
function has271(nums){
  //return true if it contains a 2,7,1 pattern
  //i+5-1
  return nums.some((num,i)=>num===2&&(nums[i+1]===7&&nums[i+2]===1))
}
*/