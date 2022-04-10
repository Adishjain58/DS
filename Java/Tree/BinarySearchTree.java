package Tree;

import java.util.ArrayList;
import java.util.List;

import StackAndQueue.Queue;

public class BinarySearchTree {
    Node root;

    BinarySearchTree() {
        this.root = null;
    }

    // In BST each node can have max of 2 node that's why created this class for
    // node.
    class Node {
        Node left;
        Node right;
        int data;

        Node(int data) {
            this.left = null;
            this.right = null;
            this.data = data;
        }
    }

    // function to insert data in BST
    void insert(int data) {
        // Create a new Node with the passed data.
        Node newNode = new Node(data);
        // if root is null then we can set root to the new node.
        if (this.root == null) {
            this.root = newNode;
        } else {
            Node head = this.root;
            while (true) {
                // if data is less than the head's data then
                if (data < head.data) {
                    // if left of head is null then we will assign new node to left of head
                    if (head.left == null) {
                        head.left = newNode;
                        break;
                    }
                    // else set head to left of head
                    head = head.left;
                }
                // if data is greater than the head's data then
                else {
                    // if right of head is equal to null then we can assign right of head to new
                    // node.
                    if (head.right == null) {
                        head.right = newNode;
                        break;
                    }
                    // else set head to right of head.
                    head = head.right;
                }
            }
        }
    }

    // function to search for data in tree.
    boolean lookup(int data) {
        // if root node is null then return false.
        if (this.root == null) {
            return false;
        }
        // store the root node
        Node currentNode = this.root;
        // iterate until currentNode is not equal to null
        while (currentNode != null) {
            // if our data is equal to currentNode's data then retunr true.
            if (data == currentNode.data) {
                return true;
            }
            // else if data is greate than currentNode's data then set currentNode to right
            // of currentNode.
            else if (data > currentNode.data) {
                currentNode = currentNode.right;
            }
            // else set currentNode to left of currentNode.
            else {
                currentNode = currentNode.left;
            }
        }
        // return false.
        return false;
    }

    // The idea is to traverse through the tree on each level, i.e. first we will
    // traverse through all the nodes on one level and then move on
    // BFS is good for shoetest paths for both tree and graphs but it consumes more
    // memory
    List<Integer> breadthFirstSearch() {
        // Get access to root of the tree.
        Node currentNode = this.root;
        // List to store our values
        List<Integer> res = new ArrayList<>();
        // Queue to store the nodes and then process them
        Queue<Node> queue = new Queue<>();
        // add root node to the queue
        queue.enqueue(currentNode);
        // run a loop until our queue is empty
        while (!queue.isEmpty()) {
            // dequeue and get the node from queue.
            Node node = queue.dequeue();
            // add the data which is present in this node to our list.
            res.add(node.data);
            // if the node that we got has a left child then add it also to queue.
            if (node.left != null) {
                queue.enqueue(node.left);
            }
            // if the node that we got has a right child then add it also to queue.
            if (node.right != null) {
                queue.enqueue(node.right);
            }
        }
        // finally return the list
        return res;
    }

    // BFS using recursion, in this we will pass the queue and list as an argument
    List<Integer> breadthFirstSearchRecursive(Queue<Node> queue, List<Integer> list) {
        // if our queue is empty that means we have traversed everything and return the
        // list
        if (queue.isEmpty()) {
            return list;
        }
        // dequeue and get the node from queue.
        Node node = queue.dequeue();
        // add the data which is present in this node to our list.
        list.add(node.data);
        // if the node that we got has a left child then add it also to queue.
        if (node.left != null) {
            queue.enqueue(node.left);
        }
        // if the node that we got has a right child then add it also to queue.
        if (node.right != null) {
            queue.enqueue(node.right);
        }
        // again call the function
        return breadthFirstSearchRecursive(queue, list);
    }

    // DFS has three techniques, preorder, inorder and postorder. it is better to
    // know if a path exists
    // this method is to traverse through tree using preOrder.
    // preOrder is beneficial if you need to create a new tree using the returned
    // data.
    // preorder means traversal order will be root,left,right
    List<Integer> preOrder(Node root, List<Integer> list) {
        // if the root node is null then return null. This is our base case for
        // recursion
        if (root == null) {
            return null;
        }
        // as it's preOrder, first adding the data of tree node.
        list.add(root.data);
        // calling function again and pass root.left as root.
        preOrder(root.left, list);
        // calling function again and pass root.right as root.
        preOrder(root.right, list);
        // finally return the list containing the traversed data
        return list;
    }

    // this method is to trvaerse through tree using inOrder.
    // inOrder is useful to get sorted data in case of binary search tree.
    // inOrder means traversal order will be left,root,right
    List<Integer> inOrder(Node root, List<Integer> list) {
        // if the root node is null then return null. This is our base case for
        // recursion
        if (root == null) {
            return null;
        }
        // calling function again and pass root.left as root.
        inOrder(root.left, list);
        // as it's inOrder, adding the data of tree node once the function is called
        // after passing root.left as root.
        list.add(root.data);
        // calling function again and pass root.right as root.
        inOrder(root.right, list);
        // finally return the list containing the traversed data
        return list;
    }

    // this method is to trvaerse through tree using postOrder.
    // postOrder means traversal order will be left,right, root
    List<Integer> postOrder(Node root, List<Integer> list) {
        // if the root node is null then return null. This is our base case for
        // recursion
        if (root == null) {
            return null;
        }
        // calling function again and pass root.left as root.
        postOrder(root.left, list);
        // calling function again and pass root.right as root.
        postOrder(root.right, list);
        // as it's postOrder, adding the data of tree node once the function is called
        // after passing root.left as root and root.right as root.
        list.add(root.data);
        // finally return the list containing the traversed data
        return list;
    }

    void iterateThroughList(List<Integer> list) {
        for (int i : list) {
            System.out.print(i + " ");
        }
    }

    public static void main(String[] args) {
        BinarySearchTree binarySearchTree = new BinarySearchTree();
        binarySearchTree.insert(9);
        binarySearchTree.insert(4);
        binarySearchTree.insert(6);
        binarySearchTree.insert(20);
        binarySearchTree.insert(170);
        binarySearchTree.insert(15);
        binarySearchTree.insert(1);
        List<Integer> values = binarySearchTree.breadthFirstSearch();
        binarySearchTree.iterateThroughList(values);
        System.out.println();
        List<Integer> list = new ArrayList<>();
        Queue<Node> queue = new Queue<>();
        queue.enqueue(binarySearchTree.root);
        values = binarySearchTree.breadthFirstSearchRecursive(queue, list);
        binarySearchTree.iterateThroughList(values);
        System.out.println();
        list.clear();
        values = binarySearchTree.preOrder(binarySearchTree.root, list);
        binarySearchTree.iterateThroughList(values);
        System.out.println();
        list.clear();
        values = binarySearchTree.inOrder(binarySearchTree.root, list);
        binarySearchTree.iterateThroughList(values);
        System.out.println();
        list.clear();
        values = binarySearchTree.postOrder(binarySearchTree.root, list);
        binarySearchTree.iterateThroughList(values);
        System.out.println();
    }

}
