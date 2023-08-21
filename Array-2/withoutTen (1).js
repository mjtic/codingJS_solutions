function withoutTen(nums){
 let result = [];
 let index = 0;
  
  for(let num of nums){
    if(num !== 10){
      result[index] = num;
      index ++;
    }
  }
  while (index <nums.length){
    result[index] = 0;
    index ++;
  }
  return result;
}