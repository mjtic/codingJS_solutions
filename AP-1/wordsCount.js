function wordsCount(words, len){
  let count = 0;;
  
  for(word of words){
    if(word.length===len){
      count++;
    }
  }
  return count;
}