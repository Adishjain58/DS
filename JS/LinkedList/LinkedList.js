class Node {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Note:- Instead of using the object to create a node, we can also use object of this Node class.
class LinkedList {
  head;
  tail;
  length;

  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // To add an element at the end of LinkedList
  append = (value) => {
    const newNode = {
      value: value,
      next: null,
    };
    // Simply update next of tail to the newNode
    this.tail.next = newNode;
    // set tail to newNode to keep track which is the last node.
    this.tail = newNode;
    this.length++;
    return this;
  };

  // To add an element at the beginning of LinkedList
  prepend = (value) => {
    const newNode = {
      value: value,
      next: null,
    };
    // Set next of newNode to the head node.
    newNode.next = this.head;
    // set head to the newNode
    this.head = newNode;
    this.length++;
    return this;
  };

  // To insert an element at a specific index in LinkedList
  insert = (index, value) => {
    // If provided index is >= the length of LinkedList then we will add the element at the last of linkedList
    if (index >= this.length) {
      this.append(value);
      return this;
    }
    // if index==0 then add the node at beginning of LinkedList
    if (index == 0) {
      this.prepend(value);
      return this;
    }

    const newNode = {
      value,
      next: null,
    };
    // Get the node just before the provided index node.
    const lastNode = this.traverseList(index - 1);
    // set next of new node to next of last node.
    newNode.next = lastNode.next;
    // set next of lastNode to newNode.
    lastNode.next = newNode;
    this.length++;
    return this;
  };

  // To remove an element from a specific index from LinkedList
  remove = (index) => {
    // If index==0 then set head to head.next
    if (index == 0) {
      this.head = this.head.next;
      return this;
    }
    // If index provided is >= length of list then get length-2 node else get index-1 node.
    // So that we will have the node just before the one that we need to remove.
    let prevNode = this.traverseList(
      index >= this.length ? this.length - 2 : index - 1
    );
    // Node that needs to be removed.
    let unWantedNode = prevNode.next;
    // set next of prevNode to next of the node that we want to delete.
    prevNode.next = unWantedNode.next;
    // If index>= length of linkedList then updating the tail of LinkedList
    if (index >= this.length) {
      this.tail = prevNode;
    }
    this.length--;
    return this;
  };

  // To remove an element using specified value
  removeUsingValue = (value) => {
    let currentNode = this.head;
    // If head value is equal to given value then just update head to head.next
    if (currentNode.value == value) {
      this.head = this.head.next;
      return this;
    }
    // To track on which node we currently are.
    let counter = 0;
    // Variable to store the previous node of the current node.
    let prevNode = null;
    // Iterate until we reach end of list
    while (currentNode != null) {
      // If the currentNode's value is equal to value that we need to remove.
      // Then set next of previous node to next of current node so that refernce to current node will be removed.
      if (currentNode.value == value) {
        prevNode.next = currentNode.next;
        // if the value that we want to remove is at the last node then update tail.
        if (counter == this.length - 1) {
          this.tail = prevNode;
        }
        this.length--;
        return this;
      }
      // set prevnode to currentNode.
      prevNode = currentNode;
      // set currentNode to next of currentNode
      currentNode = currentNode.next;
      counter++;
    }

    console.log("The given value is not found");
  };

  // To traverse a list until the given index and return the nodes
  traverseList = (index) => {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  };

  // To print the LinkedList
  printList = () => {
    const list = [];
    let currentNode = this.head;
    while (currentNode != null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  };

  // to reverse a linked list.
  reverse = () => {
    // here idea is to have three node to keep track of things.
    // currentNode which starts from head, prev and next will start as null.
    // and a firtNode to update our tail
    let currentNode = this.head,
      prev = null,
      next = null,
      firstNode = this.head;
    // we will iterate until the currentNode is not equal to null
    while (currentNode != null) {
      // first update next to next of currentNode, so that we know which node comes after currentNode.
      next = currentNode.next;
      // update next of currentNode to prev, so that link will be reversed. Now next of currentnode will refer to it's
      // previous node instead of next node.
      currentNode.next = prev;
      // set prev to currentNode as the currentNode link is reversed, so that in next iteration we can reverse the link of next node
      // using this prev
      prev = currentNode;
      // and upate currentNode to it's next node. As the current link is reversed.
      currentNode = next;
      // This way all three of our nodes are moved one place and the link is reversed.
    }
    // Finally update head to the prev as after loop ends it will be at the last node of linked list.
    this.head = prev;
    // set tell to the previous head of the list.
    this.tail = firstNode;
    // Note:- we can set tail to head at the beginning of method insead of storing head in a variable and then setting tail to that
  };
}

const linkedlist = new LinkedList(10);
linkedlist.append(5);
linkedlist.append(16);
linkedlist.prepend(2);
linkedlist.prepend(4);
linkedlist.insert(1, 7);
console.log(linkedlist.printList());
linkedlist.insert(0, 20);
console.log(linkedlist.printList());
linkedlist.removeUsingValue(7);
console.log(linkedlist.printList());
linkedlist.reverse();
console.log(linkedlist.printList());
