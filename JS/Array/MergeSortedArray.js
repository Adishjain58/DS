const mergeSortedArrayOptimized = (arr1, arr2) => {
  if (arr1.length == 0) {
    return arr2;
  }
  if (arr2.length == 0) {
    return arr1;
  }
  let mergedArray = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
};

console.log(mergeSortedArrayOptimized([0, 3, 4, 31, 40], [4, 6, 30, 32]));
