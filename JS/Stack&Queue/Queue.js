// class which will be used to store each node of queue
class Node {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Queue follows the principle of first in first out so that the item which is added to queue first, will be removed first.
class Queue {
  // pointer which will point to first element of queue
  first;
  // pointer which will point to last element of queue
  last;
  // length of queue
  length;
  // initially create a blank queue
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // function to add an element to queue
  enqueue = (value) => {
    // create a new node
    const newItem = new Node(value);
    // if length = 0 then set first and last to the new Node
    if (this.length == 0) {
      this.first = newItem;
      this.last = newItem;
    }
    // else set next of last to newItem and last to newItem
    else {
      this.last.next = newItem;
      this.last = newItem;
    }
    // increase the length
    this.length++;
  };

  // Function to remove element from queue
  dequeue = () => {
    const firstItem = this.first;
    // if length = 0 then print the message and return
    if (this.length == 0) {
      console.log("Queue is empty");
      return;
    }
    // if first and last are equal then that means only one item is left
    // in this case set first and last to null and reduce the length.
    else if (this.first == this.last) {
      this.first = null;
      this.last = null;
      this.length--;
    }
    // else set first to next of first and reduce the length
    else {
      this.first = this.first.next;
      this.length--;
    }
    return firstItem.value;
  };

  peek = () => {
    return this.length ? this.first.value : "Queue is empty";
  };

  isEmpty = () => {
    return this.length ? true : false;
  };

  printQueue = () => {
    let res = [];
    let current = this.first;
    while (current != null) {
      res.push(current.value);
      current = current.next;
    }
    console.log(res);
  };
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(10);
console.log(queue.peek());
queue.printQueue();
console.log(queue.dequeue());
queue.printQueue();
queue.dequeue();
queue.printQueue();
queue.dequeue();
