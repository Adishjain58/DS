// for rxplanation refer FindPairEqualToGivenSum.java
const isPairPresentNaive = (arr, sum) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        return true;
      }
    }
  }
  return false;
};

const isPairPresentOptimized = (arr, sum) => {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return true;
    }
    set.add(sum - arr[i]);
  }
  return false;
};

console.log(isPairPresentNaive([1, 2, 3, 4, 5, 6, 7, 8], 9));
console.log(isPairPresentOptimized([1, 2, 3, 4, 5, 6, 7, 8], 9));
