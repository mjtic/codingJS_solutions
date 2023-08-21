function more14(nums){
  let count1 = nums.reduce((count,num)=>count+(num===1?1:0),0);
  let count4 = nums.reduce((count,num)=>count+(num===4?1:0),0);
  
  return count1>count4;
}


/* using filter() method;
function more14(nums){
  let more1 = nums.filter((num,i)=>nums[i]===1).length;
  let more4 = nums.filter((num,i)=>nums[i]===4).length;
  
  return more1 > more4;
}
*/

/* using for...of() loop
function more14(nums){
  let count1 = 0;
  let count4 = 0;
  for(let num of nums){
    if(num===1){
      count1++;
    }
    if(num===4){
      count4++;
    }
  }
  return count1>count4;
}
*/