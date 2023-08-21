function blueTicket(a, b, c){
  if(a+b === 10 || b+c ===10 || a+c ===10){
    return 10;
  }
  return (( (a+b)===b+c+10 ||(a+b)===a+c+10))?5:0;
}