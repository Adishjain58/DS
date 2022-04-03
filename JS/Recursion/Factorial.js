const factorialUsingIterative = (num) => {
  // have a variable to store the final output
  let res = 1;
  // run a loop from 1 to the given number
  for (let i = 1; i <= num; i++) {
    // with each loop update res to res*i
    res *= i;
  }
  return res;
};

const factorialUsingRecursion = (num) => {
  // when num is 1 we don't need to call recursion anymore that's why we will return num;
  if (num == 1) {
    return num;
  }
  // otherwise return num * factorialUsingRecursion(num - 1) so that if we have num as 6 then this statement will become
  // return 6 * factorialUsingRecursion(5)
  // return 6 * 5 * factorialUsingRecursion(4)
  // return 6 * 5 * 4 * factorialUsingRecursion(3)
  // return 6 * 5 * 4 * 3 * factorialUsingRecursion(2)
  // return 6 * 5 * 4 * 3 * 2 * factorialUsingRecursion(1)
  // after this when we will reach our base case then we will get
  // return 6 * 5 * 4 * 3 * 2 * 1 and finally we will get our result
  return num * factorialUsingRecursion(num - 1);
};

console.log(factorialUsingIterative(5));
console.log(factorialUsingRecursion(5));
