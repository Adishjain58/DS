// Given an array return the first element which is repeated in the array.
const getfirstRecurringChar = (arr) => {
  // We will create an object to know if we came across this element before.
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    // if we already have the element in our object that means it is repeated, so return the value at that index.
    if (obj[arr[i]]) {
      return arr[i];
    }
    // else add the element to object;
    else {
      obj[arr[i]] = true;
    }
  }
  // If no element is repeated twice then return undefined.
  return undefined;
};

console.log(getfirstRecurringChar([2, 5, 1, 2, 4, 6, 7, 8]));
console.log(getfirstRecurringChar([1, 2, 3, 4, 5]));
console.log(getfirstRecurringChar([2, 5, 1, 4, 1, 6, 7, 8]));
