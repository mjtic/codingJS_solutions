function stringMatch(a, b){
  const count =0;
  const len = Math.min(a.length,b.length)-1;
  
  for(let i=0; i<len; i++){
    if(a.substring(i,i+2)===b.substring(i,i+2)){
      count++;
    }
  }
  return count; 
}



/*
function stringMatch(a, b){
  const count =0;
   for(let i=0; i<a.length-1&&i<b.length-1; i++){
     
     const subA = a.substring(i, i+2);
     const subB = b.substring(i, i+2);
     
     if(subA===subB){
       count++
     }
   }
  return count;
}
*/