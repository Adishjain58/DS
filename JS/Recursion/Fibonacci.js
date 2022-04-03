const fibonacciIterative = (n) => {
  let a = 0,
    b = 1;
  let res = 0;
  for (let i = 2; i <= n; i++) {
    res = a + b;
    a = b;
    b = res;
  }
  return res;
};

const fibonacciRecursive = (n) => {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

console.log(fibonacciIterative(6));
console.log(fibonacciRecursive(5));
