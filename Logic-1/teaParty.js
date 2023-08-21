function teaParty(tea, candy){
 if (candy < 5 || tea < 5){
   return 0;
 }
 if(tea>=5 && candy >=5 && (candy >= 2* tea || tea >=  2* candy)){
   return 2;

 }
  return 1;
}



