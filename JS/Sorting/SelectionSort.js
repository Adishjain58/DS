// the idea of selection sort is that we find the smallest element in the array and swap it with the number at the beginning of array
// again find the next smallest and swap the numbers from the next index
const selectionSort = (arr) => {
  // run first loop from 0th index to n-1 as in the next loop we will start comparing from i+1.
  // so to avoid index out of bound exception we will run loop until length-1;
  for (let i = 0; i < arr.length - 1; i++) {
    // assume the element at the ith index is smallest and store it in variable;
    let min = arr[i];
    // also store the index of the assumed smallest number
    let index = i;
    // run second loop from i+1 to length of array.
    for (let j = i + 1; j < arr.length; j++) {
      // if element at jth element is smaller than the smallest value that we has assumed,
      // we will modify the min value and index for that
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }
    // after the jth loop is done we will have the smallest value for the current iterationa and it's index.
    // we will replace the value at the ith index with the smallest value we found in this iteration
    let temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
  // finally return the array.
  return arr;
};

let arr = [5, 2, 5, 9, 3, 100, 10, 1, 2];
console.log(selectionSort(arr));
