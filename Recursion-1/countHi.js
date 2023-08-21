function countHi(str){
 if(str.length<2){
   return 0;
 }
  return str.slice(0,2)==='hi'?1+countHi(str.slice(1)):countHi(str.slice(1))
}

//

function countHi(str){
  if(str.length<=1){
    return 0;
  }
  if(str.slice(0,2)==='hi'){
    return 1+countHi(str.slice(1));
  }
  return countHi(str.slice(1));
}

//
function countHi(str){
  return str.includes('hi')?str.match(/hi/g).length:0;
}