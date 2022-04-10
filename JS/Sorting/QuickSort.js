// The idea with quicksort is that in this we take a pivot element and then we compare the other elements with this element and all the elements greater than  this
// element should reside right side of this element and all elements smaller to this should reside left side of this element so that this elements position can be fixed.
// in the next iteration for left half pass starting index as same as passed initially and as for final index pass pivot elements finalIndex-1 and for right half,
// starting index as pivot elements finalIndex+1 and final index same as initially passed.
const quickSort = (arr, left, right) => {
  // variable to store the intial pivot index
  let pivot;
  // variable to store final index of pivot element so that from this position we could divide the array into 2 for next iteration.
  let partitionIndex;
  if (left < right) {
    // setting pivot to right
    pivot = right;
    //  getting final pivot index to further use it to divide the array.
    partitionIndex = getFinalPivot(arr, pivot, left);
    // divide the rest of the array to iterate into 2 parts using the partitionIndex(i.e. final pivot index);
    // for left part modify right to partitionIndex-1.
    quickSort(arr, left, partitionIndex - 1);
    // for right part modify left to partitionIndex+1.
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};

// this method will rearranage elements of the array and return us the final index value of our pivot element.
const getFinalPivot = (arr, pivot, left) => {
  // run loop from left to pivot index.
  for (let i = left; i < pivot; ) {
    // if element at arr[i]>arr[pivot] then we will replace arr[i] with arr[pivot-1], arr[pivot-1] with arr[pivot] and arr[pivot] with arr[i];
    if (arr[i] > arr[pivot]) {
      // if there are only 2 elements left to compare than swap those and decrease pivot by 1
      if (i == pivot - 1) {
        let temp = arr[i];
        arr[i] = arr[pivot];
        arr[pivot] = temp;
      } else {
        // first store value at pivot-1 index in a temporary variable.
        let temp = arr[pivot - 1];
        // replace value at pivot-1 with value which is at pivot index.
        arr[pivot - 1] = arr[pivot];
        // replace value at pivot index with value at ith index.
        arr[pivot] = arr[i];
        // finally replace value at pivot index with temporary variable value.
        arr[i] = temp;
        // decrase pivot by 1
      }
      pivot--;
    }
    // if arr[i]<arr[pivot] then increase i by 1.
    else {
      i++;
    }
    console.log("after each iteration " + arr);
  }
  console.log(arr);
  console.log("pivot " + pivot + " pivot value " + arr[pivot]);
  // finally return the pivot index
  return pivot;
};

const numbers = [20, 10, 30, 50, 5, 2, 1, 100, 40];
// pass array, left as 0 and right as length -1
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
