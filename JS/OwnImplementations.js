Array.prototype.myMap = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};

Array.prototype.myFilter = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

Array.prototype.myReduce = function (callback, accumulator) {
  let accm = accumulator ? accumulator : this[0];
  for (let i = accumulator ? 0 : 1; i < this.length; i++) {
    accm = callback(accm, this[i]);
  }
  return accm;
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.myMap((val, index) => val + 1 + index));
console.log(arr.myMap((val) => val * val));
console.log(arr.myFilter((val) => val % 2 == 0));
console.log(arr.myReduce((a, b) => a + b, 10));
