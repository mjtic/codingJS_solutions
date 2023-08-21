function zeroMax(nums){
  
 for(let i=0; i<nums.length; i++){
   if(nums[i]===0){
     let maxOdd = 0;
     for(let j=i+1; j<nums.length; j++){
       if(nums[j]%2===1 && nums[j] > maxOdd){
         maxOdd = nums[j];
       }
     }
     nums[i] = maxOdd;
   }
 }
  return nums;
}