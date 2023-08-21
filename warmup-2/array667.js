/*
function array667(nums){
  // given an array of ints
  // return number of times that two 6's next
  let count =0;
    for(let i=0; i<nums.length; i++){
      if(nums[i]===6&&nums[i+1]===6||nums[i]===6&&nums[i+1]===7){
        count++;
      }
    }
  return count;
}
*/

function array667(nums){
 return nums.filter((num,i)=>num===6&&(nums[i+1]===6 || nums[i+1]===7)).length;
}
