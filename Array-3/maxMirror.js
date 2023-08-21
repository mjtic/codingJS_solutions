function maxMirror(nums){
  let maxSize = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j >= 0; j--) {
      let size = 0;
      let k = i;
      let l = j;

      while (k < nums.length && l >= 0 && nums[k] === nums[l]) {
        size++;
        k++;
        l--;
      }

      if (size > maxSize) {
        maxSize = size;
      }
    }
  }

  return maxSize;
}