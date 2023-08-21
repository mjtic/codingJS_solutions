function no14(nums){
  let hasOne = false;
  let hasFour = false;
  
  for(let num of nums){
    if(num===1){
      hasOne = true;
    }
    if(num===4){
      hasFour = true;
    }
  }
  return !hasOne || !hasFour;
}


/*
function no14(nums){
  return !nums.some((num,i)=>nums.includes(1)&&nums.includes(4))
}
*/

/*
function no14(nums){
  for(let i=0; i<nums.length; i++){
    if(nums.includes(1)&&nums.includes(4)){
      return false;
    }
  }
  return true;
}
*/