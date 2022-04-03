const moveZeroesNaive = (nums) => {
  let len = nums.length;
  let size = nums.length - 1;
  for (let i = 0; i < len; ) {
    if (nums[i] == 0) {
      for (let j = i + 1; j < len; j++) {
        nums[j - 1] = nums[j];
      }
      nums[size--] = 0;
      i = 0;
      len--;
    } else {
      i++;
    }
  }
  return nums;
};

const moveZeroesMoreOptimized = (nums) => {
  let noOfZeroes = 0;
  let initial = 0;
  let size = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      noOfZeroes++;
    } else {
      nums[initial++] = nums[i];
    }
  }
  for (let i = 0; i < noOfZeroes; i++) {
    nums[size--] = 0;
  }
  return nums;
};

console.log(moveZeroesNaive([0, 0, 1]));
console.log(moveZeroesMoreOptimized([0, 0, 1]));
