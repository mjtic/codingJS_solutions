function closeFar(a, b, c){
  return Math.abs(b - c) >= 2 && (Math.abs(a - b) <= 1 && Math.abs(a - c) >= 2 || Math.abs(a - c) <= 1 && Math.abs(a - b) >= 2);
}