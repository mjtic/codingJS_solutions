function dateFashion(you, date){
  //you is stylishness range 0-10
  //date is stylishness range 0-10
  //return is table 0=no, 1=maybe, 2=yes
  //if either is 8>= result =2 unless either is 2<= then 0=no
  // otherwise result is 1=maybe;

  if (you <= 2 || date <= 2) {
    return 0;
  } else if (you >= 8 || date >= 8) {
    return 2;
  } else {
    return 1;
  }
}