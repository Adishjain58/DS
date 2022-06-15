class Node {
  left;
  right;
  value;
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

// for explanation refer to BinarySearchTree.java
class BinarySearchTree {
  root;
  constructor() {
    this.root = null;
  }

  insert = (value) => {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
    } else {
      let head = this.root;
      while (true) {
        if (value < head.value) {
          if (head.left == null) {
            head.left = newNode;
            break;
          } else {
            head = head.left;
          }
        } else {
          if (head.right == null) {
            head.right = newNode;
            break;
          } else {
            head = head.right;
          }
        }
      }
    }
  };

  //   remove = (value) => {
  //     if (!this.root) {
  //       return false;
  //     } else {
  //       let prev,
  //         currentNode = this.root;
  //       while (currentNode) {
  //         if (value < currentNode.value) {
  //           prev = currentNode;
  //           currentNode = currentNode.left;
  //         } else if (value > currentNode.value) {
  //           prev = currentNode;
  //           currentNode = currentNode.right;
  //         } else {
  //           if (!currentNode.right) {
  //             if (value == this.root.value) {
  //               console.log("Inside root check");
  //               this.root = this.root.left;
  //               return true;
  //             } else {
  //               prev.right = currentNode.left;
  //             }
  //           } else {

  //               let rightNode = currentNode.right;
  //               let prevNode = rightNode;
  //               while (rightNode.left) {
  //                 prevNode = rightNode;
  //                 rightNode = rightNode.left;
  //               }
  //               rightNode.left = currentNode.left;
  //               prevNode.left = null;
  //               rightNode.right = currentNode.right;
  //               if (prev) {
  //                 prev.right = rightNode;
  //               }else{

  //               }
  //               return true;

  //           }
  //         }
  //       }
  //       return false;
  //     }
  //   };

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  lookup = (value) => {
    if (!this.root) {
      return false;
    } else {
      let head = this.root;
      while (head) {
        if (head.value == value) {
          return true;
        } else if (value < head.value) {
          head = head.left;
        } else {
          head = head.right;
        }
      }
      return false;
    }
  };

  breadthFirstSearch = () => {
    let currentNode = this.root;
    let res = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length != 0) {
      let node = queue.shift();
      res.push(node.value);
      if (node.left != null) {
        queue.push(node.left);
      }
      if (node.right != null) {
        queue.push(node.right);
      }
    }
    return res;
  };

  breadthFirstSearchRecursive = (queue, list) => {
    if (queue.length == 0) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchRecursive(queue, list);
  };

  preOrder = (root, arr) => {
    if (!root) {
      return;
    }
    arr.push(root.value);
    this.preOrder(root.left, arr);
    this.preOrder(root.right, arr);
    return arr;
  };

  inOrder = (root, arr) => {
    if (!root) {
      return;
    }

    this.inOrder(root.left, arr);
    arr.push(root.value);
    this.inOrder(root.right, arr);
    return arr;
  };

  postOrder = (root, arr) => {
    if (!root) {
      return;
    }

    this.postOrder(root.left, arr);
    this.postOrder(root.right, arr);
    arr.push(root.value);
    return arr;
  };
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(4);
tree.insert(6);
tree.insert(null);
tree.insert(null);
tree.insert(3);
tree.insert(7);
tree.insert(20);
console.log(tree.breadthFirstSearch());
console.log(tree.breadthFirstSearchRecursive([tree.root], []));
console.log(tree.preOrder(tree.root, []));
console.log(tree.inOrder(tree.root, []));
console.log(tree.postOrder(tree.root, []));
console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(6));
// console.log(tree.lookup(20));
console.log(tree.remove(20));
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.remove(1));
console.log(JSON.stringify(traverse(tree.root)));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
