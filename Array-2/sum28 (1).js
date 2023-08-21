function sum28(nums){
  let sum = 0;
  for(let num of nums){
    if(num===2){
      sum+= num;
    }
  }
  return sum===8;
}

/* for loop
function sum28(nums){
  let sum = 0;
  for(let i=0; i<nums.length; i++){
    if(nums[i]===2){
      sum+= nums[i];
    } 
  }
  return sum===8;
 }
*/