function sumHeights2(heights, start, end){
  
  let sum = 0;
  for(let i=start; i<end; i++){
    if(heights[i]<heights[i+1]){
    sum+= Math.abs(heights[i]-heights[i+1])*2;
    }else{
    sum+= Math.abs(heights[i]-heights[i+1]);
    }
  }
  return sum;
}