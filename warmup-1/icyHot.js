function icyHot(temp1, temp2){
  if ((temp1 < 0)&&(temp2 > 100) || (temp1 > 0)&&(temp2 < 100)){
    return true
  }else{
    return false
}
}