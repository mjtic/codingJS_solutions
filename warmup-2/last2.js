function last2(str){
    if (str.length < 2) {
    return 0;
  }
  
  const last2Chars = str.substring(str.length - 2);
  let count = 0;
  
  for (let i = 0; i < str.length - 2; i++) {
    const substring = str.substring(i, i + 2);
    if (substring === last2Chars) {
      count++;
    }
  }
  
  return count;
}