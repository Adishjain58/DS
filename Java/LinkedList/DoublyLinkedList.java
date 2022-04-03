package LinkedList;

// For explanation refer DoublyLinkedList.js
public class DoublyLinkedList<T> {
    Node head;
    int length = 0;
    Node tail;

    DoublyLinkedList(T data) {
        Node newNode = new Node(data);
        this.head = newNode;
        this.tail = newNode;
        this.length++;
    }

    class Node {
        T data;
        Node next;
        Node prev;

        Node(T data) {
            this.data = data;
            this.next = null;
            this.prev = null;
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
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    void append(T data) {
        Node newNode = new Node(data);
        this.tail.next = newNode;
        newNode.prev = this.tail;
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
        Node indexNode = this.traverseListToIndex(index);
        Node prevNode = indexNode.prev;
        prevNode.next = newNode;
        newNode.next = indexNode;
        newNode.prev = prevNode;
        indexNode.prev = newNode;
        if (index == this.length - 1) {
            this.tail.prev = newNode;
        }
        this.length++;
        return this.head;
    }

    Node removeByIndex(int index) {
        if (index == 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return this.head;
        }

        Node indexNode = traverseListToIndex(index >= this.length ? this.length - 1 : index);
        Node prevNode = indexNode.prev;
        prevNode.next = indexNode.next;
        if (index < this.length - 1) {
            indexNode.next.prev = prevNode;
        }
        if (index >= this.length - 1) {
            this.tail = prevNode;
        }
        this.length--;
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
            currentNode.prev = next;
            prev = currentNode;
            currentNode = next;
        }
        this.head = prev;
        this.tail = firsNode;
    }

    public static void main(String[] args) {
        DoublyLinkedList<Integer> doublyLinkedList = new DoublyLinkedList<Integer>(2);
        doublyLinkedList.append(6);
        doublyLinkedList.prepend(3);
        doublyLinkedList.insert(7, 2);
        doublyLinkedList.printList();
        doublyLinkedList.removeByIndex(1);
        doublyLinkedList.printList();
        doublyLinkedList.reverse();
        doublyLinkedList.printList();

        DoublyLinkedList<String> doublyLinkedList2 = new DoublyLinkedList<String>("first");
        doublyLinkedList2.prepend("second");
        doublyLinkedList2.append("third");
        doublyLinkedList2.append("fourth");
        doublyLinkedList2.insert("fifth", 2);
        doublyLinkedList2.insert("sixth", 4);
        doublyLinkedList2.removeByIndex(20);
        doublyLinkedList2.removeByIndex(2);
        doublyLinkedList2.append("seventh");
        doublyLinkedList2.prepend("eight");
        doublyLinkedList2.insert("ninth", 100);
        doublyLinkedList2.insert("tenth", 2);
        doublyLinkedList2.printList();
        doublyLinkedList2.reverse();
        doublyLinkedList2.printList();
    }
}
