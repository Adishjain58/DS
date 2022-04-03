const maximumSubArray = (nums) => {
  let sum = 0,
    max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
