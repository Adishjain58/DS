package Tree;

// for explanation refer to BinarySearchTree.js
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

}
