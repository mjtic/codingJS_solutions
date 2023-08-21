function has12(nums){
  let has1 = false;
  
  for(let num of nums){
    if(num===1){
      has1 = true;
    }
    if(num===2 && has1){
      return true;
    }
  }
  return false;
}

/*
function has12(nums){
  let has1 = false;
  let has2 = false;
  
  for(let num of nums){
    if(num===1){
      has1 = true;
    }
    if(num===2){
      has2 = true;
    }
  }
  return nums.indexOf(1)<nums.lastIndexOf(2)&& (has1&&has2);
}
*/