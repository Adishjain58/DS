// Custom Array Creation in js
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItemsToLeft(index);
    return item;
  }

  shift() {
    const item = this.data[0];
    this.shiftItemsToLeft(0);
    return item;
  }

  unshift(item) {
    this.shiftItemsToRight(0);
    this.data[0] = item;
  }

  insert(index, item) {
    this.shiftItemsToRight(index);
    this.data[index] = item;
  }

  shiftItemsToLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  shiftItemsToRight(index) {
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.length++;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("are");
newArray.shift();
newArray.push("test");
newArray.delete(1);
newArray.unshift("hi");
newArray.insert(1, "how");
newArray.push("you");
console.log(newArray);
