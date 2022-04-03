//Given an array, rotate the array to the right by k steps, where k is non-negative.

const rotateArray = (nums, k) => {
  let len = nums.length;
  let res = [];
  for (let i = 0; i < len; i++) {
    res[(i + k) % len] = nums[i];
  }
  return res;
};

const rotateArrayInPlaceOn = (nums, k) => {
  let len = nums.length;
  let res = nums.slice(0);
  for (let i = 0; i < len; i++) {
    nums[(i + k) % len] = res[i];
  }
  return nums;
};

console.log(rotateArray([1, 2, 3], 4));
console.log(rotateArrayInPlaceOn([1, 2, 3], 4));
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotateArrayInPlace([1, 2, 3, 4, 5, 6, 7], 3));
