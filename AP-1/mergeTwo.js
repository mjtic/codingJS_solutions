function mergeTwo(a, b, n){
  // result alphabetical order && without duplicate
   const result = new Array(n);
    let indexResult = 0;
    let indexA = 0;
    let indexB = 0;

    while (indexResult < n) {
        if (a[indexA].localeCompare(b[indexB]) < 0) {
            result[indexResult++] = a[indexA++];
        } else if (a[indexA].localeCompare(b[indexB]) > 0) {
            result[indexResult++] = b[indexB++];
        } else {
            result[indexResult++] = a[indexA++];
            indexB++;
        }
    }

    return result;
}