const mergeSort = require("../Sorting/MergeSort");

// idea with binary search is that we will have a sorted array and find the mid index of this array.
// if our value is present at the mid index then return true, else if our value is less than the value at mid,
// set right to mid-1 else set left to left+1.
const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length;
  // iterate until left <= right
  while (left <= right) {
    // find mid index of array
    mid = Math.floor((left + right) / 2);
    // if our value is presnt at mid index then return true.
    if (arr[mid] == val) {
      return true;
    }
    // if value is greater than value at mid then set left to mid+1
    else if (val > arr[mid]) {
      left = mid + 1;
    }
    // else set right to mid-1.
    else {
      right = mid - 1;
    }
  }
  // if we are not returned from function inside the loop then that means our value is not present.
  // So, simply return false.
  return false;
};

let arr = [5, 2, 5, 9, 3, 100, 10, 1, 2];
console.log(binarySearch(mergeSort.mergeSort(arr), 2));
