function countHi(str){
  let index = str.indexOf('hi');
  let count = 0;
    for(let i=0; i<str.length; i++){
      if(index !== -1){
        count++;
        index = str.indexOf('hi', index+1);
      }
    }
  return count;
}


//includes && match();
function countHi(str){
return str.includes('hi')?str.match(/hi/g).length:0;
}