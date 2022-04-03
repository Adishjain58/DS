// Class to create a new Node.
class Node {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  // Our stack class will have three properties, top, bottom and length
  top; // will refer to top element in stack
  bottom; // will refer to bottom element in stack
  length; // to keep track of length of stack
  // When object of stack class is created set top and bottom to null and length to 0.
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // to add an element at top of stack
  push = (value) => {
    const newNode = new Node(value);
    // if length is 0 then it means there are no elements in the stack.
    // So set both top and bottom to null
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    }
    // if length is greater than 0 basically we are creating a reverse linkedlist
    // where next of a node doesn't refer to nextNode that got added in linkedlist but the previous node.
    else {
      // store the current top element in a variable.
      const topNode = this.top;
      // update top to newly created node i.e. newNode in this case.
      this.top = newNode;
      // set next of top to previous top.
      this.top.next = topNode;
    }
    // increase length of stack
    this.length++;
    return this;
  };

  // to get the top element of stack
  peek = () => {
    // simple return the top Node.
    return this.top;
  };

  // to check if our stack is empty or not.
  isEmpty = () => {
    return this.length ? false : true;
  };

  // to remove top element from the stack.
  pop = () => {
    // if there are no elements in stack then simply return null;
    if (!this.length) {
      return null;
    }
    // if top and bottom are equal then set bottom to null.
    if (this.top == this.bottom) {
      this.bottom = null;
    }
    // store the node which is going to be removed. So, that we can return it at the end.
    const nodetoBeDeleted = this.top;
    // set top to next of top
    this.top = this.top.next;
    // decrease length of stack as an element was removed from stack.
    this.length--;
    // return the element or node which is deleted.
    return nodetoBeDeleted;
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
