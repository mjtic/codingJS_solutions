function zeroFront(nums){
 for(let i=0; i<nums.length; i++){
   if(nums[i]>0){
     return nums.sort();
   }
   if(nums[i]<0){
     return nums.sort().reverse();
   }
 } 
  return nums;
}