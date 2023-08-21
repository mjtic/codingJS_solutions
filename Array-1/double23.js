function double23(nums){
  return Array(nums).some((num,i)=> (num[i]===2 && num[i+1]===2) || (num[i]===3&&num[i+1]===3))
}