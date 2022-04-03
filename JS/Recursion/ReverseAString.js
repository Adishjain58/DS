let res = "";
const reverseStringRecursion = (str, index) => {
  // in this our base case is when the index is equal to lentgh of our string.
  // In this case we will simply return.
  if (index == str.length) {
    return;
  }
  // call function again and increase index by 1.
  reverseStringRecursion(str, index + 1);
  // At this point our index will be str.length-1 and now the recursion call stack will backtrack.
  // i.e. our index will again come back from str.lenth-1 to 0.
  // that's why if we will access character of string which is at index value, our string will be reversed.
  return (res += str[index]);
};

const reverseStringIterative = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  console.log(res);
};

let str = "test123";
console.log(reverseStringRecursion(str, 0));
reverseStringIterative(str);
