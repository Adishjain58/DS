// The idea with bubble sort is that from the beginning of the array we will compare two consecutive numbers and if the first number is greater than the second one
// then replace both the numbers this way with each iteration largest number will be put on the last index
const bubbleSort = (arr) => {
  // run first loop from length of array-1 to 0 so that with each iteration the largest number is put at the current value of i
  for (let i = arr.length - 1; i >= 0; i--) {
    // run second loop from 0th index to i-1 because with each iteration we need to compare numbers from beginnig.
    for (let j = 0; j < i; j++) {
      // if element at j+1 is greater that element at j then swap the numbers
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  // finally return the sorted array
  return arr;
};

let arr = [5, 2, 5, 9, 3, 100, 10, 1, 2];
console.log(bubbleSort(arr));
