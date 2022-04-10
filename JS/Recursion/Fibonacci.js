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

// Dynamic Programming is generally useful when you are using recursion and the problem divides into same sub problem.
const fibonacciDynamic = () => {
  // have an object to store the past results. So, that if same value is provided in the function then we won't have to calculate it again.
  // we can simply return the cached value.
  // here we are using closures so that we won't have to keep cache object in global scope.
  let cache = {};
  const fib = (n) => {
    // whenever a value is passed, first we will check if it is in the object.
    // if it's there then return the value from cache object
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      }
      // else store the calculated value in the cache object
      else {
        cache[n] = fib(n - 1) + fib(n - 2);
        // finally return the value from the cached object itself
        return cache[n];
      }
    }
  };
  return fib;
};

const fibFaster = fibonacciDynamic();
console.log(fibonacciIterative(60));
console.log(fibonacciRecursive(5));
console.log(fibFaster(120));
