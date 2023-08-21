function bunnyEars2(bunnies){
  // odd bunnies normal 2 ears
  // even bunnies 3 ears
  if(bunnies===0){
    return 0;
  }
   return ((bunnies % 2 === 1) ? 2 : 3) + bunnyEars2(bunnies - 1);
}