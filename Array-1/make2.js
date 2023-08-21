function make2(a, b){
  if(a.length >=2){
    return a.slice(0,2);
   } else if(a.length === 1){
     return [a[0],b[0]];
   }
  return b.slice(0,2);
}

//using push

function make2(a, b){
  let result = [];
  if(a.length >=2){
    result.push(a[0],a[1]);
   } else if(a.length === 1){
     result.push(a[0],b[0]);
   } else{
     result.push(b[0],b[1]);
   }
  
  return result;
}