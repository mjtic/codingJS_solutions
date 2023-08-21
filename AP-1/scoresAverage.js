function scoresAverage(scores){
  let len = scores.length;
  let mid = Math.floor(len/2);
  let sum = 0, count=0, first, second;
  
  for(let i=0; i<mid; i++){
    sum+= scores[i];
    count++;
    }
  first = Math.floor(sum/count);
  sum = count = 0;
  
  for(let i=mid; i<scores.length; i++){
    sum+= scores[i];
    count++;
    
  }
  second = Math.floor(sum/count);
  
  return Math.max(first,second);
  }

