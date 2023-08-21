function wordsWithout(words, target){
  let result = [];
  
  for(word of words){
    if(word!==target){
      result.push(word);
    }
  }
  return result;
}