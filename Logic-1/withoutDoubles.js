function withoutDoubles(die1, die2, noDoubles){
  if(!noDoubles){
    return die1+die2;
  }
  if(die1===die2){
    return (die1 !== 6)? die1+die2+1: die1+1;
  }
  return die1+die2;
}