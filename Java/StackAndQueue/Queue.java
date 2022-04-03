package StackAndQueue;

// For explanation refer to Queue.js
public class Queue<T> {
    Node first, last;
    int length;

    Queue() {
        first = null;
        last = null;
        length = 0;
    }

    class Node {
        T value;
        Node next;

        Node(T value) {
            this.value = value;
            this.next = null;
        }
    }

    void enqueue(T value) {
        Node newItem = new Node(value);
        if (this.length == 0) {
            this.first = newItem;
            this.last = newItem;
        } else {
            this.last.next = newItem;
            this.last = newItem;
        }
        this.length++;
    }

    T dequeue() {
        Node firstItem = this.first;
        if (this.length == 0) {
            System.out.println("Queue is empty");
            return null;
        } else if (this.first.equals(this.last)) {
            this.first = null;
            this.last = null;
            this.length--;
        } else {
            this.first = this.first.next;
            this.length--;
        }
        return firstItem.value;
    }

    T peek() {
        if (this.length == 0) {
            System.out.println("Queue is empty");
            return null;
        }
        return this.first.value;
    }

    void printQueue() {
        Node firstNode = this.first;
        while (firstNode != null) {
            System.out.print(firstNode.value + " ");
            firstNode = firstNode.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Queue<Integer> queue = new Queue<>();
        queue.enqueue(1);
        queue.enqueue(10);
        System.out.println(queue.peek());
        queue.printQueue();
        System.out.println(queue.dequeue());
        queue.printQueue();
        queue.dequeue();
        queue.printQueue();
        queue.dequeue();
        System.out.println();
        Queue<String> queue2 = new Queue<>();
        queue2.enqueue("first");
        queue2.enqueue("second");
        System.out.println(queue2.peek());
        queue2.printQueue();
        System.out.println(queue2.dequeue());
        queue2.printQueue();
        queue2.dequeue();
        queue2.printQueue();
        queue2.dequeue();
    }
}
