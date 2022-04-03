// Node class to create the nodes in DoublyLinkedList
class Node {
  data;
  next;
  prev;
  // Whenever a new node is created, set prev and next to null and data equal to data passed.
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head;
  tail;
  length;
  constructor(data) {
    const newNode = new Node(data);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  // To add an element at the end of LinkedList
  append(data) {
    const newNode = new Node(data);
    // As we are adding a node to the last of list, we need to set prev of new Node to tail.
    newNode.prev = this.tail;
    // setting next of tail to new node
    this.tail.next = newNode;
    // set tail to new node to keep track of last node.
    this.tail = newNode;
    this.length++;
  }

  // to add a node at beginning of list
  prepend(data) {
    const newNode = new Node(data);
    // As node is added at the beginning, update next of new node to head
    newNode.next = this.head;
    // set prev of head to new node to keep track of previous node.
    this.head.prev = newNode;
    // set head to new node to keep track of first node.
    this.head = newNode;
    this.length++;
  }

  // to inset a node at a specific index in list.
  insert(index, data) {
    const newNode = new Node(data);
    // if index==0 then simply use prepend method as node will be added at the beginning of list.
    if (index == 0) {
      this.prepend(data);
      return this;
    }
    // if index>= length if linkedlist then simply call append method as node will be added at the end of list.
    if (index >= this.length) {
      this.append(data);
      return this;
    }

    // getting the node which is present at the passed index.
    let indexNode = this.traverseToIndex(index);
    // get previous node of the index node.
    let prevNode = indexNode.prev;
    // setting next of prev node to the new node as we need to insert it after previous node of index node.
    prevNode.next = newNode;
    // updating next of new node to index node.
    newNode.next = indexNode;
    // set prev of index node to new node to modify the previous refrence as new node was added before the index node.
    indexNode.prev = newNode;
    // set prev of new node to prev node to keep track of what will be the prev node for the newly added node.
    newNode.prev = prevNode;
    // if index is last index then update prev of tail as well as a new node was added before it
    if (index == this.length - 1) {
      this.tail.prev = newNode;
    }
    this.length++;
  }

  // to remove a node from the given index
  remove(index) {
    // if index==0 then we need to remove the head node.
    if (index == 0) {
      let nextNode = this.head.next;
      // set prev of next node from head to null as now this node will become the head.
      nextNode.prev = null;
      // modify head to the next node of head.
      this.head = nextNode;
      this.length--;
      return this;
    }
    // if index given is >= length of list then retrieve the node which is present at length of list -1 index
    // else retrieve the node at given index.
    let indexNode = this.traverseToIndex(
      index >= this.length ? this.length - 1 : index
    );
    // get prev node of the index node as to delete the index node we have to update the next of prev node
    let prevNode = indexNode.prev;
    // set next of prev node to next of index node.So, reference of index node will ne removed.
    prevNode.next = indexNode.next;
    // if the index node is < length of list-1 then that means the index node is not the tail node.
    // so we will have to modify the prev of next node of index node to prev node.
    if (index < this.length - 1) {
      indexNode.next.prev = prevNode;
    }
    // if we need to remove the tail node then need to set tail to the prev node.
    if (index >= this.length - 1) {
      this.tail = prevNode;
    }
    this.length--;
  }

  // to check if an element is present in tne linkedlist.
  find(data) {
    // taking 2 pointers so that we van traverse the linkedlist from beginning and end
    let start = 0;
    let end = this.length - 1;
    let startNode = this.head;
    let endNode = this.tail;
    // iterate until the starting index is less than end index
    while (start < end) {
      // if our data is found at either starting node or end node then we found our data.
      if (startNode.data == data || endNode.data == data) {
        console.log("Data is present");
        return this;
      }
      // else set start node to next of start node.
      startNode = startNode.next;
      // set end node to prev of end node.
      endNode = endNode.prev;
      start++;
      end--;
    }

    console.log("data is not found");
  }

  // method to go to an index and return node which is present at that index.
  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // to print the elements of linkedlist
  printList() {
    let currentNode = this.head;
    let list = [];
    while (currentNode != null) {
      list.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(list);
  }

  // to reverse a linked list.
  reverse() {
    // here idea is to have three node to keep track of things.
    // currentNode which starts from head, prev and next will start as null.
    // and a firtNode to update our tail
    let prev = null,
      currentNode = this.head,
      next = null,
      firstNode = this.head;
    // we will iterate until the currentNode is not equal to null
    while (currentNode != null) {
      // first update next to next of currentNode, so that we know which node comes after currentNode.
      next = currentNode.next;
      // update next of currentNode to prev, so that link will be reversed. Now next of currentnode will refer to it's
      // previous node instead of next node.
      currentNode.next = prev;
      // As it's a doubly linkedlist we need to update prev also to the next.
      currentNode.prev = next;
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
  }
}

let doublyLinkedList = new DoublyLinkedList(2);
doublyLinkedList.append(6);
doublyLinkedList.prepend(3);
doublyLinkedList.insert(2, 7);
doublyLinkedList.printList();
doublyLinkedList.remove(1);
doublyLinkedList.find(6);
doublyLinkedList.find(100);
doublyLinkedList.printList();
doublyLinkedList.reverse();
doublyLinkedList.printList();
