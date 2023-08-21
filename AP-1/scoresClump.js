function scoresClump(scores){
  if(scores.length>2){
    for(let i=0; i<scores.length; i++){
      if(scores[i+2]-scores[i]<=2){
        return true;
      }
    }
  }
  return false;
}