function wordsWithoutList(words, len){
  return words.filter(word=>word.length!==len)
}


// for of

function wordsWithoutList(words, len){
  let result = [];
  for(let word of words){
    if(word.length!==len){
      result.push(word);
    }
  }
  return result;
}