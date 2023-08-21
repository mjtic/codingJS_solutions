function squirrelPlay(temp, isSummer){
  //temp >=60 && temp<=90 !isSummer
  //temp >=60 && temp<=100 isSummer
  
  if((temp >=60 && temp<=90 && !isSummer) || (temp >=60 && temp<=100 && isSummer)){
    return true;
  }
  return false;
}

// better 

function squirrelPlay(temperature, isSummer) {
  if (isSummer) {
    return temperature >= 60 && temperature <= 100;
  } else {
    return temperature >= 60 && temperature <= 90;
  }
}