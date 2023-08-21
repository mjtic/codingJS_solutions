function only14(nums){
  return !nums.some((num,i)=>nums[i]!==1&&nums[i]!==4);
}

/*
function only14(nums){
   for(let num of nums){
     if(num!==1&&num!==4){
       return false;
     }
   }
  return true;
}
*/