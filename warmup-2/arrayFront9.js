// using slice() and includes() methods
function arrayFront9(nums){
  const slicedArr = nums.slice(0,4);
  return slicedArr.includes(9);
}

// if-statement and for loop

function arrayFront9(nums){
  if(nums.length <4){
    for(let i=0; i<nums.length; i++){
      if(nums[i]===9){
        return true;
      }
    }
  }
   for(let i=0; i<4; i++){ // checks only upto index of 4
     if(nums[i]===9){
     return true;
     }
   }
     return false;
} 
