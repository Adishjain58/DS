const containsDuplicate = (nums) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return true;
    } else {
      obj[nums[i]] = true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
