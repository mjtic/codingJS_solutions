function answerCell(isMorning, isMom, isAsleep){
  return !isAsleep && !(isMorning && !isMom);
}