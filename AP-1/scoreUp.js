function scoreUp(key, answers){
  const count = 0;
  let score = 0;
  for (let i=0; i<key.length; i++){
    if(key[i] === answers[i]){
      score+=4;
    }else if(answers[i]==='?'){
      score+=0;
    }else{
      score-=1;
    }
  }
  return score;
}