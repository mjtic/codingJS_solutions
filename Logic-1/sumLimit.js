function sumLimit(a, b){
  let sum = a+b;
  let digitA = String(a).length;
  let digitSum = String(sum).length;
  
  return digitSum===digitA? sum: a; 
}

