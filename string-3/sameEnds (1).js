function sameEnds(nums, len){
  
  for(let i=0; i<nums.length/2; i++){
    let start = nums.slice(0, i+1);
    let end = nums.slice(nums.length-i-1);
    
    if(start === end){
      return true;
    }
  }
  return false;
}