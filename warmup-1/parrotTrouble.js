function parrotTrouble(talking, hour){
  if(!talking){
    return false;
  } else if (hour <7 || hour>20) {
    return true
  }else{
    return false
  }
}