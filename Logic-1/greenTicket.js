function greenTicket(a, b, c){
  if(a!==b && b!==c && c!==a){
    return 0;
  }
  if(a===b && b===c && c===a ){
    return 20;
  }
  return 10;
}

//better

function greenTicket(a, b, c){
  if(a!==b && b!==c && c!==a){
    return 0;
  }
  return (a===b && b===c)?20:10;
}


