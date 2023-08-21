function bigHeights(heights, start, end){
  //return # 'big' steps start to end index
  //step is 'big' 5 <= || 5 >=
  let count = 0;
  
  for(let i=start; i<end; i++){
    if(Math.abs(heights[i]-heights[i+1])>=5){
     count++;
      }
    }
    return count;
  }
  

