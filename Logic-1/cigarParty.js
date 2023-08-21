function cigarParty(cigars, isWeekend){
  //cigars >=40 && cigars <= 60 

  if (isWeekend) {
    return cigars >= 40;
  } else {
    return cigars >= 40 && cigars <= 60;
  }
}