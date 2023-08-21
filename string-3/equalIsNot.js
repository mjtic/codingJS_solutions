
function equalIsNot(str) {
 let countIs = 0;
 let countNot = 0;
  for(let i=0; i<str.length; i++){
    if(str.slice(i, i+2) === 'is'){
      countIs++;
    }
    if(str.slice(i, i+3) === 'not'){
      countNot++;
    }
  } 
  return countIs === countNot;
}


