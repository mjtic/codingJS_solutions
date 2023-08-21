function strCopies(str, sub, n){
   if (str.length < sub.length) {
    return n <= 0;
  }
  
  if (str.slice(0, sub.length) === sub) {
    return strCopies(str.slice(1), sub, n - 1);
  }

  return strCopies(str.slice(1), sub, n);
}