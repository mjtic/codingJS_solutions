function scoresSpecial(a, b){
  // special score = %10===0; 40||90
  // sum of largest sS in A && sS in B
  // helper to find largest sS in an array
 let resultA = 0;
  for(let anA of a){
    if(anA%10===0 && anA>resultA){
      resultA = anA;
    }
  }
 let resultB = 0;
  for(let anB of b){
    if(anB%10===0 && anB>resultB){
      resultB=anB;
    }
  }
  return resultA+resultB;
}

/*
function scoresSpecial(a, b){
  //scoreA%10
  //largestA + largestB
  // decomposiiton
  
  let scoreA = 0;
  for(let i=0; i<a.length; i++){
    if(a[i]%10===0 && a[i]>=scoreA){
      scoreA = a[i];
    }
  }
  let scoreB = 0;
  for(let i=0; i<b.length; i++){
    if(b[i]%10===0 && b[i]>=scoreB){
      scoreB = b[i];
    }
  }
  
  return scoreA+scoreB;
}
*/
