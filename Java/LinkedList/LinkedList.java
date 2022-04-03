package LinkedList;

// For explanation refer LinkedList.js
public class LinkedList<T> {
    Node head;
    int length = 0;
    Node tail;

    LinkedList(T data) {
        Node newNode = new Node(data);
        this.head = newNode;
        this.tail = newNode;
        this.length++;
    }

    class Node {
        T data;
        Node next;

        Node(T data) {
            this.data = data;
            this.next = null;
        }
    }

    void printList() {
        Node curreNode = this.head;
        while (curreNode != null) {
            System.out.print(curreNode.data + " ");
            curreNode = curreNode.next;
        }
        System.out.println();
    }

    void prepend(T data) {
        Node newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    void append(T data) {
        Node newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    Node insert(T data, int index) {
        if (index == 0) {
            this.prepend(data);
            return this.head;
        }
        if (index >= this.length) {
            this.append(data);
            return this.head;
        }
        Node newNode = new Node(data);
        Node prevNode = this.traverseListToIndex(index - 1);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return this.head;
    }

    Node removeByIndex(int index) {
        if (index == 0) {
            this.head = this.head.next;
            this.length--;
            return this.head;
        }

        Node prevNode = traverseListToIndex(index >= this.length ? this.length - 2 : index - 1);
        Node nextNode = prevNode.next;
        prevNode.next = nextNode.next;
        if (index >= this.length - 1) {
            this.tail = prevNode;
        }
        this.length--;
        return this.head;
    }

    Node removeByValue(T data) {
        if (this.head.data == data) {
            this.head = this.head.next;
            this.length--;
            return this.head;
        }
        Node prevNode = null;
        Node currentNode = this.head;
        int counter = 0;
        while (currentNode != null) {
            if (currentNode.data == data) {
                prevNode.next = currentNode.next;
                if (counter == this.length - 1) {
                    this.tail = prevNode;
                }
                this.length--;
                return this.head;
            }
            counter++;
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        System.out.println("Value is not found in linkedList");
        return this.head;
    }

    Node traverseListToIndex(int index) {
        Node startNode = this.head;
        int counter = 0;
        while (counter != index) {
            startNode = startNode.next;
            counter++;
        }
        return startNode;
    }

    void reverse() {
        Node prev = null, currentNode = this.head, next = null, firsNode = this.head;
        while (currentNode != null) {
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
        this.head = prev;
        this.tail = firsNode;
    }

    public static void main(String[] args) {
        LinkedList<Integer> linkedList = new LinkedList<Integer>(5);
        linkedList.prepend(2);
        linkedList.append(10);
        linkedList.append(11);
        linkedList.insert(4, 2);
        linkedList.insert(3, 4);
        linkedList.removeByIndex(20);
        linkedList.removeByIndex(2);
        linkedList.removeByValue(5);
        linkedList.removeByValue(100);
        linkedList.append(5);
        linkedList.prepend(20);
        linkedList.insert(15, 100);
        linkedList.insert(11, 2);
        linkedList.printList();
        linkedList.reverse();
        linkedList.printList();

        LinkedList<String> linkedList2 = new LinkedList<String>("first");
        linkedList2.prepend("second");
        linkedList2.append("third");
        linkedList2.append("fourth");
        linkedList2.insert("fifth", 2);
        linkedList2.insert("sixth", 4);
        linkedList2.removeByIndex(20);
        linkedList2.removeByIndex(2);
        linkedList2.removeByValue("second");
        linkedList2.removeByValue("sixth");
        linkedList2.removeByValue("test");
        linkedList2.append("seventh");
        linkedList2.prepend("eight");
        linkedList2.insert("ninth", 100);
        linkedList2.insert("tenth", 2);
        linkedList2.printList();
        linkedList2.reverse();
        linkedList2.printList();
    }
}
