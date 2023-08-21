function caughtSpeeding(speed, isBirthday){
  if(speed <= 60 && !isBirthday || (speed <= 65 && isBirthday)){
    return 0;
  } else if(speed >= 61 && speed <= 80 && !isBirthday || speed >= 66 && speed <= 88 && isBirthday){
    return 1;
  } else if(speed >= 81 && !isBirthday){
    return 2;
  }
}

// better

function caughtSpeeding(speed, isBirthday) {
  if (isBirthday) {
    speed -= 5;
  }

  if (speed <= 60) {
    return 0;
  } else if (speed >= 61 && speed <= 80) {
    return 1;
  } else {
    return 2;
  }
}