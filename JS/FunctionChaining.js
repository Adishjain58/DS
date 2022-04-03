function foo() {
  let that = this;
  return function (num2) {
    that.num = num2;
    return that;
  };
}

foo.prototype.add = function (num2) {
  this.num = this.num + num2;
  return this;
};

foo.prototype.subtract = function (num2) {
  this.num = this.num - num2;
  return this;
};

foo.prototype.getVal = function () {
  return this.num;
};
const foo2 = new foo();
console.log(foo2(2).add(2).getVal());
// console.log(foo(2).add(2));
// console.log(foo(2).add(3).add(4).subtract(2).getVal());

// Imp if need to return an object without creating an outside object.
const arr = [
  [1, 2],
  [2, 3],
  [3, 4],
];
console.log(
  // in reduce function if we don't pass anything using "," then the first parameter of reduce function will contain the 1st index of array and 2nd parameter will have 2nd index of array and with each iteration the value of 1st parameter will update with the value returned from reduce function.
  // And if we pass anything using "," then first paramter will have the value which is passed and 2nd parameter will have the first index of array. Rest process is same as above
  arr.reduce((a, b) => {
    a[b[0]] = b[1];
    return a;
  }, {})
);

// Working Function Chaninh example
let Foo = function (num) {
  return {
    num: num,
    add: function (num2) {
      this.num = this.num + num2;
      return this;
    },
    subtract: function (num2) {
      this.num = this.num - num2;
      return this;
    },
    getVal: function () {
      return this.num;
    },
  };
};

console.log(Foo(2).add(3).add(4).add(5).subtract(2).getVal());
