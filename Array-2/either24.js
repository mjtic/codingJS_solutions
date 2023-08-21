function either24(nums){
  let has22 = false;
  let has44 = false;
  
  for(let i=0; i<nums.length; i++){
    if(nums[i]===2 &&nums[i+1]===2){
      has22 = true;
    }
    if(nums[i]===4 &&nums[i+1]===4){
      has44 = true;
    }
  }
  return has22&&!has44 || has44&&!has22;
}

/*
function either24(nums){
 let two = nums.filter((num,i)=> nums[i]===2 &&nums[i+1]===2).length;
 let four = nums.filter((num,i)=> nums[i]===4 &&nums[i+1]===4).length;
  
  return two!==four
}
*/