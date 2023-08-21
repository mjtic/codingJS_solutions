function startWord(str, word) {
if(str.length>=word.length&&str.slice(1,word.length)===word.slice(1)){
    return str.slice(0, word.length);
  }
  return ''; 
}

