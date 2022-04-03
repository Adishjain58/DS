class Stack {
  array;
  // When object of stack class is created, create a blank array
  constructor() {
    this.array = [];
  }

  // to add an element at top of stack
  push = (value) => {
    this.array.push(value);
    return this;
  };

  // to get the top element of stack
  peek = () => {
    // simple return the last element in array.
    return this.array[this.array.length];
  };

  // to check if our stack is empty or not.
  isEmpty = () => {
    return this.array.length ? false : true;
  };

  // to remove top element from the stack.
  pop = () => {
    return this.array.pop();
  };
}

let stack = new Stack();
console.log(stack.push("google"));
console.log(stack.push("twitter"));
console.log(stack.push("mihoyo"));
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
