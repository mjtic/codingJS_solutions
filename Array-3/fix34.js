function fix34(nums){
 for (let i=0; i<nums.length; i++){
   if(nums[i]===3){
     const four = nums[i+1];
     nums[i+1] = 4;
     
       for(let j=i+2; j<nums.length; j++){
         if(nums[j]===4){
           nums[j]=four;
         }
       }
   }
 }
  return nums;
}