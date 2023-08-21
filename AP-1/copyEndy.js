function copyEndy(nums, count){
  const result = Array(count);
  let position = 0;
  for(num of nums){
    if(num>=0 && num<=10 || num>=90 && num<=100){
      result[position] = num;
      position++;
    }
    if(position===count){
      break;
    }
  }
  return result;
}