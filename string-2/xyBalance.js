function xyBalance(str){
  const lastXindex =-1;
  const lastYindex =-1;
  
  for(let i=0; i<str.length; i++){
    if(str[i] === 'x'){
      lastXindex = i;
    }else if(str[i]==='y'){
      lastYindex =i;
    }
  }
  return lastYindex>=lastXindex;
}

/*
 function xyBalance(str){
   let lastXindex = str.lastIndexOf('x');
   let lastYindex = str.lastIndexOf('y');
   
   return lastXindex ===-1||lastYindex>lastXindex; 
 }
 */