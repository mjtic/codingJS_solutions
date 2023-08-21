function nTwice(str, n){
  return n<1 ? '':str.slice(0,n).concat(str.slice(-n));
}