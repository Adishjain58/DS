// The idea of merge sort is that first divide the whole array until we have single elements and then starts compairing them sort them and return a merged array with each step.
// this is the main function responsible to didive the arrays and finally using merge method to sort the array.
const mergeSort = (arr) => {
  // base case if array length is 1 then return the array.
  if (arr.length == 1) {
    return arr;
  }

  // find mid index of the current array.
  let mid = Math.floor(arr.length / 2);
  // create a left array which will have elements upto the mid index.
  let left = arr.slice(0, mid);
  // create a right array which will have elements from mid toend of array,
  let right = arr.slice(mid, arr.length);
  console.log("left " + left);
  console.log("right " + right);
  // call merge method and pass mergeSort(left) and mergeSort(right) arrays as arguments.
  return merge(mergeSort(left), mergeSort(right));
};

// function responsible to merge both the arrays after sorting them.
const merge = (left, right) => {
  // array to store the final merged sorted array.
  let res = [];
  // initialize i and j with 0
  let i = 0,
    j = 0;
  // run the loop until any of i and j become equal to length of the left or right array.
  while (i < left.length && j < right.length) {
    // if left array value is smaller then add that value to res array and increase i by 1
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    }
    // else add right array value and increase j by 1.
    else {
      res.push(right[j]);
      j++;
    }
  }
  // after the initial loop only 1 array will have some elements left out of left and right array.
  // so iterating over both and adding the remaining value.
  while (i < left.length) {
    res.push(left[i]);
    i++;
  }
  while (j < right.length) {
    res.push(right[j]);
    j++;
  }
  console.log(res);
  // return the merged array
  return res;
};

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2];
console.log(mergeSort(arr));

module.exports = {
  mergeSort,
};
