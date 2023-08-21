function findTheMedian(nums){
 
  
  let len = nums.length;
  let mid = Math.floor(len/2);
  
  for(let i=0; i<len; i++){
    if(len%2===1){   
      return nums[mid]
    }else{
      return (nums[mid]+nums[mid-1])/2
    }
}