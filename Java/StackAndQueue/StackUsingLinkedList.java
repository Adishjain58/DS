package StackAndQueue;

// For explanation refer StackUsingLinkedList.js
public class StackUsingLinkedList<T> {
    int length;
    Node top;
    Node bottom;

    StackUsingLinkedList() {
        this.length = 0;
        this.top = null;
        this.bottom = null;
    }

    class Node {
        T value;
        Node next;

        Node(T value) {
            this.value = value;
            this.next = null;
        }
    }

    void push(T value) {
        Node newNode = new Node(value);
        if (this.length == 0) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            Node topNode = this.top;
            this.top = newNode;
            this.top.next = topNode;
        }
        this.length++;
    }

    Node peek() {
        return this.top;
    }

    Node pop() {
        if (this.length == 0) {
            return null;
        }
        if (this.top.equals(this.bottom)) {
            this.bottom = null;
        }
        Node nodeToBeDeleted = this.top;
        this.top = this.top.next;
        length--;
        return nodeToBeDeleted;
    }

    boolean isEmpty() {
        return this.length == 0 ? true : false;
    }

    void printStack() {
        Node lastNode = this.top;
        while (lastNode != null) {
            System.out.println(lastNode.value);
            lastNode = lastNode.next;
        }
    }

    public static void main(String[] args) {
        StackUsingLinkedList<Integer> stackUsingLinkedList = new StackUsingLinkedList<>();
        stackUsingLinkedList.push(2);
        stackUsingLinkedList.push(5);
        System.out.println("top element " + stackUsingLinkedList.peek().value);
        System.out.println("Current stack looks like below");
        stackUsingLinkedList.printStack();
        stackUsingLinkedList.pop();
        System.out.println("Current stack looks like below");
        stackUsingLinkedList.printStack();

        StackUsingLinkedList<String> stackUsingLinkedList2 = new StackUsingLinkedList<>();
        stackUsingLinkedList2.push("first");
        stackUsingLinkedList2.push("second");
        System.out.println("top element " + stackUsingLinkedList2.peek().value);
        System.out.println("Current stack looks like below");
        stackUsingLinkedList2.printStack();
        stackUsingLinkedList2.pop();
        System.out.println("Current stack looks like below");
        stackUsingLinkedList2.printStack();
    }

}
