function plusOut(str, word) {
let result ='';
  for(let i=0; i<str.length; i++){
    if(word.length<=str.length&&str.slice(i, i+word.length)===word){
      result+= word;
      i+= word.length-1;
    }else{
      result+='+';
    }
  }
  return result;
}

/*
function plusOut(str, word) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (i + word.length <= str.length && str.substring(i, i + word.length) === word) {
      result += word;
      i += word.length - 1;
    } else {
      result += '+';
    }
  }

  return result;
}
*/