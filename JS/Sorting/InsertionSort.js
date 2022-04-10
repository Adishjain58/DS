// logic of insertion sort is that take a number and compare it with all the numbers before it in array.
// if a number greater than this is found then move all the elements from that element to current element and put the current element to index of the greater element.
const insertionSort = (arr) => {
  // run first loop from 0 to length-1
  for (let i = 0; i < arr.length; i++) {
    // run second loop from 0 to i-1 index
    for (let j = 0; j < i; j++) {
      console.log(
        `i: ${i} A[${i}]: ${arr[i]} j: ${j} A[${j}]: ${arr[j]} arr: [${arr}]`
      );
      // if value at j index is greater than i index then shift elements to right and set value at jth index to value of ith index
      if (arr[j] > arr[i]) {
        moveElementsToRightAndSwap(arr, i, j);
        break;
      }
    }
  }
  return arr;
};

// method to move all elements to right from jth index to ith index and swap elemts of ith index and jth index
const moveElementsToRightAndSwap = (arr, i, j) => {
  // storing the value of ith index as it is the largest index and after shifting it's value will be lost.
  let elem = arr[i];
  // shift all elements to right from j to i index.
  for (let k = i; k > j; k--) {
    arr[k] = arr[k - 1];
  }
  // set value of jth index to value of ith index that we stored earlier
  arr[j] = elem;
};

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(insertionSort(arr));
