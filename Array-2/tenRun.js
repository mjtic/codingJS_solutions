function tenRun(nums) {
  // Initialize variables to keep track of replacement status and the last multiple of 10
  let replace = false;
  let multiple = 0;

  // Loop through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // Check if the current element is a multiple of 10
    if (nums[i] % 10 === 0) {
      // If it's the first multiple of 10 encountered, update 'replace' status and store its value in 'multiple'
      if (!replace) {
        replace = true;
        multiple = nums[i];
      } else {
        // If it's not the first multiple of 10, update 'multiple' with the current value
        multiple = nums[i];
      }
    }

    // If we are in the replacement process and the current element is not a multiple of 10, replace it with 'multiple'
    if (nums[i] % 10 !== 0 && replace) {
      nums[i] = multiple;
    }
  }

  // Return the modified array
  return nums;
}
