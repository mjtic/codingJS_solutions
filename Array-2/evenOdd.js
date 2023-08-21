function evenOdd(nums){
 nums.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) {
      return -1; // Even numbers come before odd numbers
    } else if (a % 2 !== 0 && b % 2 === 0) {
      return 1; // Odd numbers come after even numbers
    } else {
      return 0; // Preserve the original order if both are even or both are odd
    }
  });

  return nums;
}


// shorter version

function evenOdd(nums){
 nums.sort((a,b)=>{
   if(a%2===0 && b%2!==0){
     return -1;
   }
 })
 return nums;
}