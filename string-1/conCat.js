function conCat(a, b){
  if(a.length>0&&b.length>0&&a.slice(-1)===b[0]){
    return a+b.slice(1);
  }
  return a+b;
}