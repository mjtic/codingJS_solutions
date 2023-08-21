function evenlySpaced(a, b, c){
  let sorted = [a, b, c].sort((x, y) => x - y);

  let difference1 = sorted[1] - sorted[0];
  let difference2 = sorted[2] - sorted[1];

  return difference1 === difference2;
}